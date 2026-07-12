/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "8 samples, 8 products, frozen and chilled",
  "id": "cofid-current-16-408",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fishcakes, salmon, coated in breadcrumbs, baked",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 20.4,
    "energy_kcal": 245.0,
    "fat_g": 13.7,
    "fibre_g": 1.7,
    "folate_ug": 14.0,
    "iron_mg": 0.77,
    "magnesium_mg": 21.0,
    "omega3_g": 1.74,
    "phosphorus_mg": 150.0,
    "potassium_mg": 269.0,
    "protein_g": 11.4,
    "salt_g": 0.805,
    "sat_fat_g": 2.0,
    "sodium_mg": 322.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.79,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-408",
  "state": "Baked",
  "subcategory": "JR",
  "tags": [
    "baked",
    "fish-and-seafood",
    "jr"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
