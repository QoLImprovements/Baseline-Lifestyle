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
  "id": "usda-sr-legacy-173559",
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
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, SENSITIVE, (LACTOSE FREE), powder, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 436.0,
    "carbs_g": 55.7,
    "energy_kcal": 520.0,
    "fat_g": 28.1,
    "fibre_g": 0.0,
    "folate_ug": 75.0,
    "iron_mg": 9.33,
    "magnesium_mg": 30.0,
    "omega3_g": 0.079,
    "phosphorus_mg": 293.0,
    "potassium_mg": 557.0,
    "protein_g": 11.1,
    "salt_g": 0.395,
    "sat_fat_g": 18.3,
    "sodium_mg": 158.0,
    "sugar_g": 55.7,
    "vitamin_a_ug": 468.0,
    "vitamin_c_mg": 45.1,
    "vitamin_e_mg": 7.07,
    "vitamin_k_ug": 41.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173559",
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
