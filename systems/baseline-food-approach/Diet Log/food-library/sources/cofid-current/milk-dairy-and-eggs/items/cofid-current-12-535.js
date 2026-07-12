/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "9 samples, 6 brands, including low fat, semi-skimmed",
  "id": "cofid-current-12-535",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, flavoured, pasteurised, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 11.7,
    "energy_kcal": 72.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.62,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 206.0,
    "protein_g": 3.6,
    "salt_g": 0.1125,
    "sat_fat_g": 0.99,
    "sodium_mg": 45.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-535",
  "state": "Unspecified",
  "subcategory": "BAR",
  "tags": [
    "bar",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
