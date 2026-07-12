/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "racc",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-746764",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Carrots, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 7.92,
    "energy_kcal": 37.0,
    "fat_g": 0.47,
    "fibre_g": 3.2,
    "folate_ug": 7.0,
    "iron_mg": 0.43,
    "magnesium_mg": 10.8,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 210.0,
    "protein_g": 0.81,
    "salt_g": 0.165,
    "sat_fat_g": 0.0,
    "sodium_mg": 66.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 15.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746764",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
