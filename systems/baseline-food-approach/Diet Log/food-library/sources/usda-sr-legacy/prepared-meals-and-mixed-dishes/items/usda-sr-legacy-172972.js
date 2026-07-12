/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "0-5-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172972",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "0-5-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.5 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, QUAKER MultiGrain Oatmeal, dry",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 72.6,
    "energy_kcal": 1400.0,
    "fat_g": 2.73,
    "fibre_g": 11.9,
    "folate_ug": 29.0,
    "iron_mg": 2.88,
    "magnesium_mg": 115.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 346.0,
    "potassium_mg": 322.0,
    "protein_g": 12.6,
    "salt_g": 0.0175,
    "sat_fat_g": 0.45,
    "sodium_mg": 7.0,
    "sugar_g": 2.46,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172972",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
