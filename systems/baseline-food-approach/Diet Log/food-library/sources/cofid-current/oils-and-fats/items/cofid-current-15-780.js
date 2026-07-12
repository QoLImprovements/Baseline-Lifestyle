/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe, split pigeon peas",
  "id": "cofid-current-15-780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, pigeon pea dahl, with vegetable oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 13.5,
    "energy_kcal": 116.0,
    "fat_g": 5.5,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.98,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 303.0,
    "protein_g": 4.6,
    "salt_g": 0.055,
    "sat_fat_g": 0.42,
    "sodium_mg": 22.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-780",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
