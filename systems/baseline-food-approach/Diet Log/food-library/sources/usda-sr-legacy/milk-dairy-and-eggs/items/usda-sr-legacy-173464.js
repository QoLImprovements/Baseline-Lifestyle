/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173464",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Yogurt, frozen, flavors not chocolate, nonfat milk, with low-calorie sweetener",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 19.7,
    "energy_kcal": 433.0,
    "fat_g": 0.8,
    "fibre_g": 2.0,
    "folate_ug": 12.0,
    "iron_mg": 0.04,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 339.0,
    "protein_g": 4.4,
    "salt_g": 0.2025,
    "sat_fat_g": 0.488,
    "sodium_mg": 81.0,
    "sugar_g": 12.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173464",
  "state": "Frozen",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
