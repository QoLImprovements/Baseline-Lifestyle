/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "8 samples, 8 products, wheat",
  "id": "cofid-current-11-902",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Couscous, plain, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 37.5,
    "energy_kcal": 178.0,
    "fat_g": 1.0,
    "fibre_g": 2.2,
    "folate_ug": 13.0,
    "iron_mg": 1.02,
    "magnesium_mg": 32.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 129.0,
    "potassium_mg": 154.0,
    "protein_g": 7.2,
    "salt_g": 0.01,
    "sat_fat_g": 0.18,
    "sodium_mg": 4.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-902",
  "state": "Cooked",
  "subcategory": "AT",
  "tags": [
    "at",
    "cooked",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
