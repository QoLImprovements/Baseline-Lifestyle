/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pastry",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172754",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "pastry",
      "kind": "unit",
      "label": "pastry"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Danish pastry, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 37.2,
    "energy_kcal": 1560.0,
    "fat_g": 21.9,
    "fibre_g": 1.0,
    "folate_ug": 60.0,
    "iron_mg": 1.8,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 108.0,
    "potassium_mg": 98.0,
    "protein_g": 8.0,
    "salt_g": 1.0425,
    "sat_fat_g": 6.79,
    "sodium_mg": 417.0,
    "sugar_g": 6.95,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172754",
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
