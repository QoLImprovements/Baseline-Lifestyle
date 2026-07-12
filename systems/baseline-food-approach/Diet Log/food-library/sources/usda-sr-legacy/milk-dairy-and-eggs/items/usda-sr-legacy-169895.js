/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tablespoon",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-169895",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "serving-2-tbsp",
      "kind": "unit",
      "label": "serving (2 tbsp)"
    }
  ],
  "name": "Salad dressing, buttermilk, lite",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 21.3,
    "energy_kcal": 845.0,
    "fat_g": 12.4,
    "fibre_g": 1.1,
    "folate_ug": 4.0,
    "iron_mg": 0.69,
    "magnesium_mg": 6.0,
    "omega3_g": 0.527,
    "phosphorus_mg": 193.0,
    "potassium_mg": 132.0,
    "protein_g": 1.25,
    "salt_g": 2.8,
    "sat_fat_g": 1.25,
    "sodium_mg": 1120.0,
    "sugar_g": 3.77,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.6,
    "vitamin_k_ug": 34.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169895",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
