/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171386",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, NESTLE, GOOD START SUPREME, with iron, DHA and ARA, prepared from liquid concentrate",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 7.39,
    "energy_kcal": 276.0,
    "fat_g": 3.37,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.99,
    "magnesium_mg": 5.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 24.0,
    "potassium_mg": 71.0,
    "protein_g": 1.45,
    "salt_g": 0.045,
    "sat_fat_g": 1.47,
    "sodium_mg": 18.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171386",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
