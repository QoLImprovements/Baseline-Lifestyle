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
  "id": "usda-sr-legacy-172289",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, Enfamil Premature High Protein 24 Calories, ready to feed, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 139.0,
    "carbs_g": 8.66,
    "energy_kcal": 339.0,
    "fat_g": 3.9,
    "fibre_g": 0.0,
    "folate_ug": 31.0,
    "iron_mg": 1.41,
    "magnesium_mg": 7.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 70.0,
    "potassium_mg": 77.0,
    "protein_g": 2.8,
    "salt_g": 0.1375,
    "sat_fat_g": 1.78,
    "sodium_mg": 55.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 320.0,
    "vitamin_c_mg": 15.6,
    "vitamin_e_mg": 2.2,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172289",
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
