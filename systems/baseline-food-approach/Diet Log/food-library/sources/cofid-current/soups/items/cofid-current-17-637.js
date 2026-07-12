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
  "id": "cofid-current-17-637",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, broccoli and stilton, carton, chilled",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 3.8,
    "energy_kcal": 51.0,
    "fat_g": 3.1,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 0.19,
    "magnesium_mg": 8.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 47.0,
    "potassium_mg": 125.0,
    "protein_g": 2.3,
    "salt_g": 0.5,
    "sat_fat_g": 1.69,
    "sodium_mg": 200.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-637",
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
