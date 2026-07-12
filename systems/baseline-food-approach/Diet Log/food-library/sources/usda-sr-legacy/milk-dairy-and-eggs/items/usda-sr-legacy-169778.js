/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-25-cup-dry-rice-mix",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169778",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "0-25-cup-dry-rice-mix",
      "kind": "unit",
      "label": "0.25 cup dry rice mix"
    }
  ],
  "name": "Rice mix, cheese flavor, dry mix, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 73.9,
    "energy_kcal": 1520.0,
    "fat_g": 3.51,
    "fibre_g": 1.8,
    "folate_ug": 175.0,
    "iron_mg": 4.74,
    "magnesium_mg": 88.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 369.0,
    "potassium_mg": 351.0,
    "protein_g": 8.77,
    "salt_g": 2.975,
    "sat_fat_g": 1.75,
    "sodium_mg": 1190.0,
    "sugar_g": 5.26,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 20.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169778",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
