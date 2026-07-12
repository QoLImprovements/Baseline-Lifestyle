/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quesadilla-8-10-inch-diameter",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169035",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 194.0,
      "key": "quesadilla-8-10-inch-diameter",
      "kind": "unit",
      "label": "quesadilla 8-10 inch diameter"
    },
    {
      "gramsPerUnit": 279.0,
      "key": "3-quesadilla-5-6-inch-diameter",
      "kind": "unit",
      "label": "3 quesadilla 5-6 inch diameter"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "serving-serving-size-varied-on-diameter-and-count-of-quesadi",
      "kind": "unit",
      "label": "serving serving size varied on diameter and count of quesadila"
    }
  ],
  "name": "Restaurant, Mexican, cheese quesadilla",
  "nutritionPerBasis": {
    "calcium_mg": 430.0,
    "carbs_g": 24.1,
    "energy_kcal": 368.0,
    "fat_g": 23.1,
    "fibre_g": 1.7,
    "folate_ug": 52.0,
    "iron_mg": 1.52,
    "magnesium_mg": 24.0,
    "omega3_g": 0.171,
    "phosphorus_mg": 347.0,
    "potassium_mg": 102.0,
    "protein_g": 15.9,
    "salt_g": 1.7525,
    "sat_fat_g": 11.6,
    "sodium_mg": 701.0,
    "sugar_g": 2.21,
    "vitamin_a_ug": 155.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169035",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "milk-dairy-and-eggs",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
