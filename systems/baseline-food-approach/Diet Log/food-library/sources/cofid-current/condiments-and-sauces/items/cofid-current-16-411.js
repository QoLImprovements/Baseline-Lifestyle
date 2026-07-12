/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "6 samples, 6 products, frozen and chilled",
  "id": "cofid-current-16-411",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mussels in white wine sauce, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 3.7,
    "energy_kcal": 82.0,
    "fat_g": 3.2,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 1.46,
    "magnesium_mg": 76.0,
    "omega3_g": 0.26,
    "phosphorus_mg": 122.0,
    "potassium_mg": 173.0,
    "protein_g": 9.7,
    "salt_g": 1.52,
    "sat_fat_g": 1.26,
    "sodium_mg": 608.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-411",
  "state": "Cooked",
  "subcategory": "JM",
  "tags": [
    "condiments-and-sauces",
    "cooked",
    "jm"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
