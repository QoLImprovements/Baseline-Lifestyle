/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2709131",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tabbouleh",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 9.65,
    "energy_kcal": 127.0,
    "fat_g": 9.66,
    "fibre_g": 1.8,
    "folate_ug": 20.0,
    "iron_mg": 0.74,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 154.0,
    "protein_g": 1.64,
    "salt_g": 1.2375,
    "sat_fat_g": 1.5,
    "sodium_mg": 495.0,
    "sugar_g": 1.34,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 15.8,
    "vitamin_e_mg": 2.18,
    "vitamin_k_ug": 97.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709131",
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
