/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "Label data",
  "id": "cofid-current-17-711",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, minestrone, canned",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 6.6,
    "energy_kcal": 31.0,
    "fat_g": 0.2,
    "fibre_g": 0.9,
    "folate_ug": 5.0,
    "iron_mg": 0.3,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 101.0,
    "protein_g": 1.1,
    "salt_g": 0.5,
    "sat_fat_g": 0.1,
    "sodium_mg": 200.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-711",
  "state": "Canned",
  "subcategory": "WA",
  "tags": [
    "canned",
    "soups",
    "wa"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
