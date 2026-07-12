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
  "id": "usda-sr-legacy-170991",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, NESTLE, GOOD START SOY, with DHA and ARA, liquid concentrate",
  "nutritionPerBasis": {
    "calcium_mg": 139.0,
    "carbs_g": 14.7,
    "energy_kcal": 132.0,
    "fat_g": 6.67,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 2.38,
    "magnesium_mg": 15.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 84.0,
    "potassium_mg": 154.0,
    "protein_g": 3.31,
    "salt_g": 0.1325,
    "sat_fat_g": 2.9,
    "sodium_mg": 53.0,
    "sugar_g": 11.7,
    "vitamin_a_ug": 119.0,
    "vitamin_c_mg": 15.9,
    "vitamin_e_mg": 1.94,
    "vitamin_k_ug": 11.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170991",
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
