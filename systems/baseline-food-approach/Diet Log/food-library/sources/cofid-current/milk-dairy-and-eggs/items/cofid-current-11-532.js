/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 8 brands",
  "id": "cofid-current-11-532",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, sponge, with dairy cream and jam, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 43.9,
    "energy_kcal": 280.0,
    "fat_g": 10.9,
    "fibre_g": 2.7,
    "folate_ug": 7.0,
    "iron_mg": 0.42,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 171.0,
    "potassium_mg": 83.0,
    "protein_g": 4.3,
    "salt_g": 0.545,
    "sat_fat_g": 0.0,
    "sodium_mg": 218.0,
    "sugar_g": 24.3,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-532",
  "state": "Frozen",
  "subcategory": "AN",
  "tags": [
    "an",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
