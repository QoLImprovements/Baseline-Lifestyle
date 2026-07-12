/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "5 packets of 6 buns including frozen, topped with sesame seeds",
  "id": "cofid-old-11-481",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, hamburger buns",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 48.8,
    "energy_kcal": 264.0,
    "fat_g": 5.0,
    "fibre_g": 0.0,
    "folate_ug": 48.0,
    "iron_mg": 2.3,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 110.0,
    "protein_g": 9.1,
    "salt_g": 1.375,
    "sat_fat_g": 1.1,
    "sodium_mg": 550.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-481",
  "state": "Unspecified",
  "subcategory": "AG",
  "tags": [
    "ag",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
