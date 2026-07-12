/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "18 samples",
  "id": "cofid-current-12-358",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Gouda",
  "nutritionPerBasis": {
    "calcium_mg": 773.0,
    "carbs_g": 0.0,
    "energy_kcal": 377.0,
    "fat_g": 30.6,
    "fibre_g": 0.0,
    "folate_ug": 43.0,
    "iron_mg": 0.3,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 498.0,
    "potassium_mg": 82.0,
    "protein_g": 25.3,
    "salt_g": 2.3125,
    "sat_fat_g": 20.33,
    "sodium_mg": 925.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 281.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-358",
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
