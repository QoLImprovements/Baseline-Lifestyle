/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "8 samples, 5 products, including New Convent Garden and own brands",
  "id": "cofid-current-17-634",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, carrot and coriander, carton, chilled",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 4.7,
    "energy_kcal": 45.0,
    "fat_g": 2.6,
    "fibre_g": 1.0,
    "folate_ug": 4.0,
    "iron_mg": 0.14,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 124.0,
    "protein_g": 0.9,
    "salt_g": 0.45,
    "sat_fat_g": 1.38,
    "sodium_mg": 180.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 334.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-634",
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
