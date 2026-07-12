/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "20 samples",
  "id": "cofid-current-12-550",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, cottage, plain, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 3.3,
    "energy_kcal": 68.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 0.0,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 171.0,
    "potassium_mg": 161.0,
    "protein_g": 10.6,
    "salt_g": 0.525,
    "sat_fat_g": 0.96,
    "sodium_mg": 210.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-550",
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
