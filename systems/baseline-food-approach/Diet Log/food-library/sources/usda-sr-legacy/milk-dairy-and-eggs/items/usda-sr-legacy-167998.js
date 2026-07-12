/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup-from-19211",
  "description": "Sweets",
  "id": "usda-sr-legacy-167998",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "0-5-cup-from-19211",
      "kind": "unit",
      "label": "0.5 cup From 19211"
    }
  ],
  "name": "Puddings, chocolate, dry mix, instant, prepared with 2% milk",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 18.9,
    "energy_kcal": 105.0,
    "fat_g": 1.92,
    "fibre_g": 0.4,
    "folate_ug": 5.0,
    "iron_mg": 0.4,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 238.0,
    "potassium_mg": 168.0,
    "protein_g": 3.15,
    "salt_g": 0.71,
    "sat_fat_g": 1.06,
    "sodium_mg": 284.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167998",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
