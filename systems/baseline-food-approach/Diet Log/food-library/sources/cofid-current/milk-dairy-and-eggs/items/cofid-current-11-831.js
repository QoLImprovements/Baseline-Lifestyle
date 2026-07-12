/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products, including sandwich and Swiss roll",
  "id": "cofid-current-11-831",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, sponge, with jam and butter cream, retail",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 55.1,
    "energy_kcal": 354.0,
    "fat_g": 14.8,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 0.68,
    "magnesium_mg": 8.0,
    "omega3_g": 0.36,
    "phosphorus_mg": 162.0,
    "potassium_mg": 132.0,
    "protein_g": 3.7,
    "salt_g": 0.55,
    "sat_fat_g": 6.96,
    "sodium_mg": 220.0,
    "sugar_g": 37.6,
    "vitamin_a_ug": 116.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-831",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
