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
  "id": "usda-sr-legacy-169604",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 570.0,
      "key": "package-yield-2-cups",
      "kind": "unit",
      "label": "package yield (2 cups)"
    }
  ],
  "name": "Puddings, chocolate, dry mix, regular, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 19.6,
    "energy_kcal": 120.0,
    "fat_g": 3.15,
    "fibre_g": 0.8,
    "folate_ug": 4.0,
    "iron_mg": 0.34,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 150.0,
    "protein_g": 3.16,
    "salt_g": 0.245,
    "sat_fat_g": 1.81,
    "sodium_mg": 98.0,
    "sugar_g": 12.0,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169604",
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
