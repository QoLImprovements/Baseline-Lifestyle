/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe, spiced curd/yoghurt",
  "id": "cofid-current-17-832",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Raita, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 151.0,
    "carbs_g": 5.8,
    "energy_kcal": 57.0,
    "fat_g": 2.4,
    "fibre_g": 0.4,
    "folate_ug": 18.0,
    "iron_mg": 0.71,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 258.0,
    "protein_g": 4.4,
    "salt_g": 0.1725,
    "sat_fat_g": 1.32,
    "sodium_mg": 69.0,
    "sugar_g": 5.8,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-832",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "other-foods",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
