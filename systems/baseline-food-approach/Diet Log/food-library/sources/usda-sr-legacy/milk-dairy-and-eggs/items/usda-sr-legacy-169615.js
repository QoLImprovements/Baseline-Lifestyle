/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-169615",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 559.0,
      "key": "package-yield-2-cups",
      "kind": "unit",
      "label": "package yield (2 cups)"
    }
  ],
  "name": "Puddings, coconut cream, dry mix, regular, prepared with 2% milk",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 17.8,
    "energy_kcal": 435.0,
    "fat_g": 2.5,
    "fibre_g": 0.2,
    "folate_ug": 4.0,
    "iron_mg": 0.2,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 159.0,
    "protein_g": 3.1,
    "salt_g": 0.4075,
    "sat_fat_g": 1.8,
    "sodium_mg": 163.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169615",
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
