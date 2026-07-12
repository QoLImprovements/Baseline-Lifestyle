/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "croissant-mini",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174987",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "croissant-mini",
      "kind": "unit",
      "label": "croissant, mini"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "croissant-medium",
      "kind": "unit",
      "label": "croissant, medium"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "croissant-large",
      "kind": "unit",
      "label": "croissant, large"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "croissant-small",
      "kind": "unit",
      "label": "croissant, small"
    }
  ],
  "name": "Croissants, butter",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 45.8,
    "energy_kcal": 1700.0,
    "fat_g": 21.0,
    "fibre_g": 2.6,
    "folate_ug": 88.0,
    "iron_mg": 2.03,
    "magnesium_mg": 16.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 105.0,
    "potassium_mg": 118.0,
    "protein_g": 8.2,
    "salt_g": 0.96,
    "sat_fat_g": 11.7,
    "sodium_mg": 384.0,
    "sugar_g": 11.3,
    "vitamin_a_ug": 206.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174987",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
