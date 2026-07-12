/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-penne-not-packed",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-172026",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "cup-penne-not-packed",
      "kind": "unit",
      "label": "cup penne not packed"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "cup-elbows-not-packed",
      "kind": "unit",
      "label": "cup elbows not packed"
    },
    {
      "gramsPerUnit": 169.0,
      "key": "cup-spaghetti-not-packed",
      "kind": "unit",
      "label": "cup spaghetti not packed"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "cup-fettucini-not-packed",
      "kind": "unit",
      "label": "cup fettucini not packed"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "cup-spirals-not-packed",
      "kind": "unit",
      "label": "cup spirals not packed"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "cup-shells-not-packed",
      "kind": "unit",
      "label": "cup shells not packed"
    }
  ],
  "name": "Pasta, gluten-free, brown rice flour, cooked, TINKYADA",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 32.2,
    "energy_kcal": 138.0,
    "fat_g": 1.67,
    "fibre_g": 1.7,
    "folate_ug": 4.0,
    "iron_mg": 0.53,
    "magnesium_mg": 36.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 87.0,
    "potassium_mg": 25.0,
    "protein_g": 3.46,
    "salt_g": 0.01,
    "sat_fat_g": 0.203,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172026",
  "state": "Cooked",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "cooked",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
