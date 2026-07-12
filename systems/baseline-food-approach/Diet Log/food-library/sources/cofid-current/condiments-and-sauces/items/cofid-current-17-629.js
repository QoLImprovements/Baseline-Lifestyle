/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, including black bean and Szechuan, chilled and ambient",
  "id": "cofid-current-17-629",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, Chinese stir fry",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 19.9,
    "energy_kcal": 92.0,
    "fat_g": 1.3,
    "fibre_g": 0.9,
    "folate_ug": 6.0,
    "iron_mg": 1.12,
    "magnesium_mg": 11.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 24.0,
    "potassium_mg": 106.0,
    "protein_g": 1.4,
    "salt_g": 1.425,
    "sat_fat_g": 0.12,
    "sodium_mg": 570.0,
    "sugar_g": 16.7,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-629",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
