/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174989",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "croissant-large",
      "kind": "unit",
      "label": "croissant, large"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "croissant-small",
      "kind": "unit",
      "label": "croissant, small"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "croissant-medium",
      "kind": "unit",
      "label": "croissant, medium"
    }
  ],
  "name": "Croissants, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 47.0,
    "energy_kcal": 1730.0,
    "fat_g": 20.9,
    "fibre_g": 2.6,
    "folate_ug": 74.0,
    "iron_mg": 2.15,
    "magnesium_mg": 24.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 130.0,
    "potassium_mg": 132.0,
    "protein_g": 9.2,
    "salt_g": 0.9025,
    "sat_fat_g": 10.6,
    "sodium_mg": 361.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 204.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.44,
    "vitamin_k_ug": 10.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174989",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
