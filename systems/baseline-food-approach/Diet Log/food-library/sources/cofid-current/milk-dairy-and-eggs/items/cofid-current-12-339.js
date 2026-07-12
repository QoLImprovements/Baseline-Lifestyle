/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "4 samples, 1 brand (Anchor Light)",
  "id": "cofid-current-12-339",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream, dairy, UHT, half fat, canned spray",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 7.6,
    "energy_kcal": 196.0,
    "fat_g": 17.3,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.0,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 110.0,
    "protein_g": 2.8,
    "salt_g": 0.0875,
    "sat_fat_g": 10.87,
    "sodium_mg": 35.0,
    "sugar_g": 7.4,
    "vitamin_a_ug": 153.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-339",
  "state": "Canned",
  "subcategory": "BJP",
  "tags": [
    "bjp",
    "canned",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
