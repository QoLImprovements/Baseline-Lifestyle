/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "13 samples, 9 brands, portions and tubs",
  "id": "cofid-current-12-537",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese spread, plain, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 485.0,
    "carbs_g": 7.9,
    "energy_kcal": 154.0,
    "fat_g": 7.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.29,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 850.0,
    "potassium_mg": 235.0,
    "protein_g": 15.0,
    "salt_g": 1.875,
    "sat_fat_g": 4.56,
    "sodium_mg": 750.0,
    "sugar_g": 7.3,
    "vitamin_a_ug": 134.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-537",
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
