/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 cans, 3 brands",
  "id": "cofid-current-17-695",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, chicken, cream of, canned",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 4.5,
    "energy_kcal": 58.0,
    "fat_g": 3.8,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.4,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 41.0,
    "protein_g": 1.7,
    "salt_g": 0.6,
    "sat_fat_g": 0.6,
    "sodium_mg": 240.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-695",
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
