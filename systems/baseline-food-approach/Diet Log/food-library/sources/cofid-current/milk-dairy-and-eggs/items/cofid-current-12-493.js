/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "9 samples, sampled in spring and autumn",
  "id": "cofid-current-12-493",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Emmental",
  "nutritionPerBasis": {
    "calcium_mg": 1025.0,
    "carbs_g": 0.0,
    "energy_kcal": 399.0,
    "fat_g": 30.9,
    "fibre_g": 0.0,
    "folate_ug": 23.0,
    "iron_mg": 0.3,
    "magnesium_mg": 38.0,
    "omega3_g": 0.33,
    "phosphorus_mg": 637.0,
    "potassium_mg": 87.0,
    "protein_g": 30.2,
    "salt_g": 0.4675,
    "sat_fat_g": 20.59,
    "sodium_mg": 187.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 342.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-493",
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
