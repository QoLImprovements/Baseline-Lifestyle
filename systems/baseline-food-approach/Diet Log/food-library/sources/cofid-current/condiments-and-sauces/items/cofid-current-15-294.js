/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-294",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad, wholemeal pasta, with vegetables and mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 13.8,
    "energy_kcal": 131.0,
    "fat_g": 7.5,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 1.1,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 140.0,
    "protein_g": 3.1,
    "salt_g": 0.1825,
    "sat_fat_g": 1.1,
    "sodium_mg": 73.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 235.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 1.95,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-294",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "condiments-and-sauces",
    "dr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
