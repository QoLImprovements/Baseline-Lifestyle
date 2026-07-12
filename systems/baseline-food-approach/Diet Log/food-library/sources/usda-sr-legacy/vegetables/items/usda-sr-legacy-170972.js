/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cracker",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170972",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.7,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    }
  ],
  "name": "Babyfood, crackers, vegetable",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 66.8,
    "energy_kcal": 477.0,
    "fat_g": 19.6,
    "fibre_g": 4.0,
    "folate_ug": 86.0,
    "iron_mg": 4.2,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 198.0,
    "potassium_mg": 245.0,
    "protein_g": 8.4,
    "salt_g": 1.5825,
    "sat_fat_g": 1.97,
    "sodium_mg": 633.0,
    "sugar_g": 13.0,
    "vitamin_a_ug": 179.0,
    "vitamin_c_mg": 50.5,
    "vitamin_e_mg": 8.05,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170972",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
