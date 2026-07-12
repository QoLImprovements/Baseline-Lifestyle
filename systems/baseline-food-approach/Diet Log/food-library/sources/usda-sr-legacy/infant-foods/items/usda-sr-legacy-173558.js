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
  "id": "usda-sr-legacy-173558",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, SENSITIVE, (LACTOSE FREE), liquid concentrate, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 13.6,
    "energy_kcal": 536.0,
    "fat_g": 6.95,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 2.32,
    "magnesium_mg": 8.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 72.0,
    "potassium_mg": 138.0,
    "protein_g": 2.73,
    "salt_g": 0.0975,
    "sat_fat_g": 4.52,
    "sodium_mg": 39.0,
    "sugar_g": 13.8,
    "vitamin_a_ug": 116.0,
    "vitamin_c_mg": 11.5,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 10.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173558",
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
