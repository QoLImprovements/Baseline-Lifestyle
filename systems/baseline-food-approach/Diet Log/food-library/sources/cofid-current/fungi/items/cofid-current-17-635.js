/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "10 samples, 4 products, including New Convent Garden and own brands",
  "id": "cofid-current-17-635",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, mushroom, carton, chilled",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 4.9,
    "energy_kcal": 48.0,
    "fat_g": 2.7,
    "fibre_g": 0.3,
    "folate_ug": 5.0,
    "iron_mg": 0.38,
    "magnesium_mg": 6.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 38.0,
    "potassium_mg": 131.0,
    "protein_g": 1.5,
    "salt_g": 0.7,
    "sat_fat_g": 1.43,
    "sodium_mg": 280.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-635",
  "state": "Unspecified",
  "subcategory": "WA",
  "tags": [
    "fungi",
    "unspecified",
    "wa"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
