/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "11 samples, 3 brands, powder only, not including croutons",
  "id": "cofid-current-17-653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, instant, dried, as purchased",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 64.1,
    "energy_kcal": 384.0,
    "fat_g": 13.4,
    "fibre_g": 5.6,
    "folate_ug": 6.0,
    "iron_mg": 1.26,
    "magnesium_mg": 28.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 211.0,
    "potassium_mg": 782.0,
    "protein_g": 5.9,
    "salt_g": 5.94,
    "sat_fat_g": 8.7,
    "sodium_mg": 2376.0,
    "sugar_g": 17.4,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.79,
    "vitamin_k_ug": 7.43
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-653",
  "state": "Dried",
  "subcategory": "WAE",
  "tags": [
    "dried",
    "soups",
    "wae"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
