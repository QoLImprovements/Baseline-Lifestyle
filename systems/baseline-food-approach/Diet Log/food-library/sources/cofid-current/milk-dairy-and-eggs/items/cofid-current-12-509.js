/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products, including Wall's, Carte D'or and own brands",
  "id": "cofid-current-12-509",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ice cream, non dairy, vanilla, soft scoop",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 29.8,
    "energy_kcal": 192.0,
    "fat_g": 7.7,
    "fibre_g": 0.2,
    "folate_ug": 8.0,
    "iron_mg": 0.35,
    "magnesium_mg": 12.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 68.0,
    "potassium_mg": 178.0,
    "protein_g": 2.6,
    "salt_g": 0.19,
    "sat_fat_g": 5.01,
    "sodium_mg": 76.0,
    "sugar_g": 23.5,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.8
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-509",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "bp",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
