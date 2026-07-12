/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "2-tbsp-1-serving",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171034",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "2-tbsp-1-serving",
      "kind": "unit",
      "label": "2 tbsp (1 serving)"
    }
  ],
  "name": "Salad dressing, honey mustard dressing, reduced calorie",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 28.3,
    "energy_kcal": 207.0,
    "fat_g": 10.0,
    "fibre_g": 0.8,
    "folate_ug": 2.0,
    "iron_mg": 0.41,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 55.0,
    "protein_g": 0.98,
    "salt_g": 1.7525,
    "sat_fat_g": 0.833,
    "sodium_mg": 701.0,
    "sugar_g": 18.3,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 13.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171034",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "condiments-and-sauces",
    "fats-and-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
