/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "box",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169784",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 595.0,
      "key": "box",
      "kind": "unit",
      "label": "box"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    }
  ],
  "name": "JIMMY DEAN, Sausage, Egg, and Cheese Breakfast Biscuit, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 21.1,
    "energy_kcal": 328.0,
    "fat_g": 22.9,
    "fibre_g": 2.0,
    "folate_ug": 52.0,
    "iron_mg": 1.84,
    "magnesium_mg": 15.0,
    "omega3_g": 0.206,
    "phosphorus_mg": 302.0,
    "potassium_mg": 292.0,
    "protein_g": 9.29,
    "salt_g": 1.4725,
    "sat_fat_g": 8.6,
    "sodium_mg": 589.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169784",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
