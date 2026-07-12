/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "leg-bottom-boneless",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 989.0,
      "key": "leg-bottom-boneless",
      "kind": "unit",
      "label": "leg bottom, boneless"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Lamb, Australian, imported, fresh, leg, bottom, boneless, separable lean only, trimmed to 1/8\" fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 0.0,
    "energy_kcal": 136.0,
    "fat_g": 5.24,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.88,
    "magnesium_mg": 24.0,
    "omega3_g": 0.127,
    "phosphorus_mg": 174.0,
    "potassium_mg": 231.0,
    "protein_g": 22.3,
    "salt_g": 0.2075,
    "sat_fat_g": 2.28,
    "sodium_mg": 83.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172653",
  "state": "Raw",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
