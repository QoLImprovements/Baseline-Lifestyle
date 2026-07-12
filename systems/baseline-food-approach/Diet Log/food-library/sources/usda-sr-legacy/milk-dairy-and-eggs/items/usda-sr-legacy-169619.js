/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-tbsp-whipped",
  "description": "Sweets",
  "id": "usda-sr-legacy-169619",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "2-tbsp-whipped",
      "kind": "unit",
      "label": "2 tbsp whipped"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "2-tbsp-creamy",
      "kind": "unit",
      "label": "2 tbsp creamy"
    }
  ],
  "name": "Frostings, cream cheese-flavor, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 67.3,
    "energy_kcal": 415.0,
    "fat_g": 17.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.16,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 35.0,
    "protein_g": 0.1,
    "salt_g": 0.4775,
    "sat_fat_g": 4.54,
    "sodium_mg": 191.0,
    "sugar_g": 63.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169619",
  "state": "Ready-to-eat",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "ready-to-eat",
    "sweets"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
