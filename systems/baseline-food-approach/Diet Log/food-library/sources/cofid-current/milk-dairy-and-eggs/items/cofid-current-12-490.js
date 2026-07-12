/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "8 samples, sampled in spring and autumn",
  "id": "cofid-current-12-490",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Mascarpone",
  "nutritionPerBasis": {
    "calcium_mg": 161.0,
    "carbs_g": 4.3,
    "energy_kcal": 435.0,
    "fat_g": 44.5,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.35,
    "phosphorus_mg": 116.0,
    "potassium_mg": 137.0,
    "protein_g": 4.6,
    "salt_g": 0.175,
    "sat_fat_g": 29.48,
    "sodium_mg": 70.0,
    "sugar_g": 4.3,
    "vitamin_a_ug": 412.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-490",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
