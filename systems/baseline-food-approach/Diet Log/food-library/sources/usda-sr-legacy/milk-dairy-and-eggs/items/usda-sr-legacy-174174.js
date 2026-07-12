/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Beverages",
  "id": "usda-sr-legacy-174174",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beverages, milk beverage, reduced fat, flavored and sweetened, Ready-to-drink, added calcium, vitamin A and vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 164.0,
    "carbs_g": 12.1,
    "energy_kcal": 77.0,
    "fat_g": 1.83,
    "fibre_g": 0.4,
    "folate_ug": 4.0,
    "iron_mg": 0.03,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 130.0,
    "protein_g": 3.05,
    "salt_g": 0.1225,
    "sat_fat_g": 1.12,
    "sodium_mg": 49.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174174",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
