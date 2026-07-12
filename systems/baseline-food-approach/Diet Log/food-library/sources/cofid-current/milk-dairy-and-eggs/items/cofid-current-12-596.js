/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Average of summer/autumn and winter/spring standardised milk. Analytical data, 1995-1996; and industry data",
  "id": "cofid-current-12-596",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, whole, pasteurised, average",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 4.6,
    "energy_kcal": 63.0,
    "fat_g": 3.6,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.02,
    "magnesium_mg": 11.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 96.0,
    "potassium_mg": 157.0,
    "protein_g": 3.4,
    "salt_g": 0.105,
    "sat_fat_g": 2.29,
    "sodium_mg": 42.0,
    "sugar_g": 4.6,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.6
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-596",
  "state": "Unspecified",
  "subcategory": "BAK",
  "tags": [
    "bak",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
