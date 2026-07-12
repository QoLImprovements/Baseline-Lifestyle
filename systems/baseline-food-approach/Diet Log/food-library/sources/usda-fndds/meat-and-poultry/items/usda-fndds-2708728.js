/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-kolache",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708728",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-kolache",
      "kind": "unit",
      "label": "1 kolache"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pastry, meat / poultry-filled",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 30.9,
    "energy_kcal": 341.0,
    "fat_g": 19.2,
    "fibre_g": 1.1,
    "folate_ug": 60.0,
    "iron_mg": 2.34,
    "magnesium_mg": 18.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 131.0,
    "potassium_mg": 190.0,
    "protein_g": 11.5,
    "salt_g": 0.995,
    "sat_fat_g": 7.56,
    "sodium_mg": 398.0,
    "sugar_g": 4.63,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708728",
  "state": "Unspecified",
  "subcategory": "Turnovers and other grain-based items",
  "tags": [
    "meat-and-poultry",
    "turnovers-and-other-grain-based-items",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
