/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-jalapeno-pepper",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2710045",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-jalapeno-pepper",
      "kind": "unit",
      "label": "1 jalapeno pepper"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stuffed jalapeno pepper",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 16.5,
    "energy_kcal": 241.0,
    "fat_g": 15.9,
    "fibre_g": 2.5,
    "folate_ug": 48.0,
    "iron_mg": 1.9,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 139.0,
    "potassium_mg": 232.0,
    "protein_g": 8.82,
    "salt_g": 1.11,
    "sat_fat_g": 6.34,
    "sodium_mg": 444.0,
    "sugar_g": 3.73,
    "vitamin_a_ug": 131.0,
    "vitamin_c_mg": 50.7,
    "vitamin_e_mg": 2.79,
    "vitamin_k_ug": 19.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710045",
  "state": "Unspecified",
  "subcategory": "Turnovers and other grain-based items",
  "tags": [
    "grains-bread-and-pasta",
    "turnovers-and-other-grain-based-items",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
