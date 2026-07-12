/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products, frozen, including McCain and own brands",
  "id": "cofid-current-13-483",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato wedges, retail, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 30.6,
    "energy_kcal": 176.0,
    "fat_g": 5.5,
    "fibre_g": 4.3,
    "folate_ug": 10.0,
    "iron_mg": 2.54,
    "magnesium_mg": 26.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 92.0,
    "potassium_mg": 516.0,
    "protein_g": 2.8,
    "salt_g": 0.495,
    "sat_fat_g": 2.49,
    "sodium_mg": 198.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-483",
  "state": "Cooked",
  "subcategory": "DAR",
  "tags": [
    "cooked",
    "dar",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
