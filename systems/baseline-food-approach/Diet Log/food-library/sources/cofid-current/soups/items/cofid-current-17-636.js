/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including New Convent Garden and own brands",
  "id": "cofid-current-17-636",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, tomato, carton, chilled",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 4.3,
    "energy_kcal": 37.0,
    "fat_g": 1.9,
    "fibre_g": 1.4,
    "folate_ug": 4.0,
    "iron_mg": 0.31,
    "magnesium_mg": 9.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 20.0,
    "potassium_mg": 189.0,
    "protein_g": 0.9,
    "salt_g": 0.495,
    "sat_fat_g": 0.86,
    "sodium_mg": 198.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-636",
  "state": "Unspecified",
  "subcategory": "WA",
  "tags": [
    "soups",
    "unspecified",
    "wa"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
