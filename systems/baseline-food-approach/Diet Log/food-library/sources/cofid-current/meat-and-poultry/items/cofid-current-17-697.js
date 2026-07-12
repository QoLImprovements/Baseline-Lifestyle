/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "7 cans of the same brand. Diluted with an equal volume of water",
  "id": "cofid-current-17-697",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken soup, cream of, canned, condensed, as served",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 3.0,
    "energy_kcal": 43.0,
    "fat_g": 2.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.3,
    "magnesium_mg": 4.0,
    "omega3_g": 0.23,
    "phosphorus_mg": 20.0,
    "potassium_mg": 31.0,
    "protein_g": 1.3,
    "salt_g": 0.625,
    "sat_fat_g": 0.4,
    "sodium_mg": 250.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-697",
  "state": "Canned",
  "subcategory": "WAC",
  "tags": [
    "canned",
    "meat-and-poultry",
    "wac"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
